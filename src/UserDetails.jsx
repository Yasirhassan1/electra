export default function UserDetails(){
return(
    <div className="wrap flex flex-col gap-4">
    
        <div className="wrap flex flex-col">
        <label htmlFor="">Name *</label>
        <input className="px-4 py-3 bg-white mt-2 outline-none rounded-sm" type="text" placeholder="Your answer" required name="Name" />
        </div>
        <div className="wrap flex flex-col">
        <label htmlFor="">Phone number *</label>
        <input className="px-4 py-3 bg-white mt-2 outline-none rounded-sm" type="ph" placeholder="Your answer" required name="Phone no" />
        </div>
        <div className="wrap flex flex-col">
        <label htmlFor="">Email address *</label>
        <input className="px-4 py-3 bg-white mt-2 outline-none rounded-sm" type="email" placeholder="Your answer" required name="Email address" />
        </div>
        <div className="wrap flex flex-col">
        <label htmlFor="">City *</label>
        <input className="px-4 py-3 bg-white mt-2 outline-none rounded-sm" type="text" placeholder="Your answer" required name="City" />
        </div>
        <div className="wrap flex flex-col">
        <label htmlFor="">Billing address *</label>
        <input className="px-4 py-3 bg-white mt-2 outline-none rounded-sm" type="text" placeholder="Your answer" required name="Billing address" />
        </div>
        </div>
)
}