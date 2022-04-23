import React,{Component} from 'react';  
import { ProgressSpinner } from 'primereact/progressspinner'; 
import { connect } from 'react-redux'; 
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button'; 
class AlertDialog extends Component{
    constructor(props){
        super(props)
        this.state={ 
        }
    } 
   
    render(){ 
        const{isVisible,onHide,DialogBody,header,responseMsg,responseStatus,isOk,successAlert}=this.props; 
     const renderFooter =
             (
                <div>
                   {successAlert?'':<button className='btn btn-danger' onClick={this.props.onHide}>No</button>}
                 <button className='btn btn-primary' onClick={successAlert?this.props.onHide:this.props.isOk}>{successAlert?'Ok':"Yes"}</button> 
                </div>
            );
       
        return(
            <div className=''>
             <Dialog header={header} visible={isVisible} footer={renderFooter}  style={{ width: '50vw' }} onHide={onHide}>
          <div className={responseStatus=='success'?'text-center text-success':responseStatus=='error'?'text-center text-danger':'text-center '}>{responseMsg}</div>
            </Dialog>

            </div>
        )
    }
} 
export default AlertDialog;