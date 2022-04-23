import React,{Component} from 'react';  
import { ProgressSpinner } from 'primereact/progressspinner'; 
import { connect } from 'react-redux'; 
import { Dialog } from 'primereact/dialog';
 
class ComponentDialog extends Component{
    constructor(props){
        super(props)
        this.state={ 
        }
    } 
    render(){ 
        const{isVisible,onHide,DialogBody,header}=this.props; 
        return(
            <div className=''>
             <Dialog header={header} visible={isVisible} style={{ width: '50vw' }} onHide={onHide}>
             <DialogBody onHide={onHide}/>
            </Dialog>

            </div>
        )
    }
} 
export default ComponentDialog;