import "./AddressForm.css"

export default function AddressForm(){

return (
<div className="modal" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Adress</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> 
         </button>
      </div>
      
      <div className="modal-body">
       <input type="text" placeholder="House no./ Building Name"/>
       <input type="text" placeholder="Area / Colony"/>
       <input type="text" placeholder="Pincode"/>
      
       City : <select>
       <option value='pune'>Pune</option>
       <option value='mumbai'>Mumbai</option>
       <option value='wardha'>Wardha</option>
       <option value='dhule'>Dhule</option>
       </select>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Deliver To This Address</button>
      </div>
    </div>
  </div>
</div>
)

}