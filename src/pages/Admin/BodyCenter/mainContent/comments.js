import React, {useState} from "react";


 const Comments=({display})=>{

     const Style={
     display: display?`block`:'',
         top: '50%',
         // left: '50%'
     }
     const getStyle=()=>{
         let style = ""
         if (display =true){

         }


     }
    return(
        <div className="modal fade show" id="exampleModalLong" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLongTitle" style={Style} aria-modal="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments