import React, {Component} from "react"
import "./App.css"
class ToDo extends Component{
    state={
        tarefa:"",
        lista:[]
    };
    tarefa=(e)=>{
        this.setState({
            tarefa:e.target.value
        })
    }

    enviar=()=>{
        if(this.state.tarefa === ''){
            return false
        }else{
            this.setState({
                lista: this.state.lista.concat({
                    tarefa:this.state.tarefa,
                    id: Date.now()
                }),
                tarefa:''
            })
        }

    }
    delete = (id) => {
        this.setState({
            lista: this.state.lista.filter((item) => item.id !== id)
        });
    };
    deleteAll = () => {
        this.setState({
            lista : this.state.lista.filter((item) => item.lista)
        });
    }
    render(){
        return(
             <form onSubmit={(e)=>e.preventDefault()}>
             <h1>TO DO</h1>
             <h2>MINHA LISTA DE COMPRAS</h2>
             <input onChange={this.tarefa} value={this.state.tarefa} type='text'/>
             <button onClick={this.enviar}>ADICIONAR</button>
             <button class="apagar" onClick={()=>this.deleteAll(this.state.lista)}>APAGAR ITENS</button>
             {this.state.lista.map((item,index)=>(
                <div key={index}>
                <ul>
                    <li>{item.tarefa}</li>
                    <button class="x" onClick ={() => this.delete(item.id)}>X</button>
                </ul>
                </div>
             ))}
             </form>
        )
    }
}
export default ToDo