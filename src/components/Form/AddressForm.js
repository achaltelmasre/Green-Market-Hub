import "./AddressForm.css"

export default function AddressForm() {

  return (
    <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Buy Now
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="modal-header">
              <h5 className="modal-title ">Address</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>

            <div className="modal-body">
              <input type="text" placeholder="House no./ Building Name" className="input-type" />
              <br />
              <input type="text" placeholder="Area / Colony" className="input-type" /> <br />
              <input type="text" placeholder="Pincode" className="input-type" /> <br />
              <span className="ms-4 "> Select City :</span>
              <select className="input-type">
                <option value='pune'>Pune</option>
                <option value='mumbai'>Mumbai</option>
                <option value='wardha'>Wardha</option>
                <option value='dhule'>Dhule</option>
              </select>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn-deliver">Deliver To This Address</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}