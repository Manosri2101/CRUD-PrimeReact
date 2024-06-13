import React,{useState, useEffect} from "react";
import Customers from "./customer";
import { useNavigate } from "react-router-dom";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";   
import "primeflex/primeflex.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function Edit() {
    const [Order_id, setId] = useState("");
    const [name, setName] = useState("");
    const [addr, setAddr] = useState("");
    const [food, setFood] = useState("");
    const [pay, setPay] = useState("");
    const [index, setIndex] = useState(-1);

    const navigate = useNavigate();

    useEffect(() => {
        const id = localStorage.getItem('Order_id');
        const name = localStorage.getItem('name');
        const addr = localStorage.getItem('addr');
        const food = localStorage.getItem('food');
        const pay = localStorage.getItem('pay');

        setId(id);
        setName(name);
        setAddr(addr);
        setFood(food);
        setPay(pay);

        const idx = Customers.findIndex(customer => customer.Order_id === id);
        setIndex(idx);
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (index !== -1) {
            let updatedCustomer = {
                Order_id,
                Name: name,
                Address: addr,
                Food_items: food,
                Payment: pay
            };
            Customers[index] = updatedCustomer;
            navigate("/");
        }
    };

    return(
        <>
            <div className="card">
                <h1 style={{"textAlign":"left"}}>Update the changes: </h1>
                <div className="p-field p-grid">
                    <label htmlFor="input" className="p-col-12 p-md-2">Name:</label><br/>
                        <div className="p-col- p-md-10">
                          <InputText style={{"width":"90%"}}  value={name} required onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                        </div>
                </div><br/><br/>
                <div className="p-field p-grid">
                    <label htmlFor="input" className="p-col-12 p-md-2">Address:</label><br/>
                        <div className="p-col- p-md-10">
                          <InputText style={{"width":"90%"}}  value={addr} required onChange={(e) => setAddr(e.target.value)} placeholder="Enter your address" />
                        </div>
                </div><br/><br/>
                <div className="p-field p-grid">
                    <label htmlFor="input" className="p-col-12 p-md-2">Food_items:</label><br/>
                        <div className="p-col- p-md-10">
                          <InputText style={{"width":"90%"}}  value={food} required onChange={(e) => setFood(e.target.value)} placeholder="Enter your food-items" />
                        </div>
                </div><br/><br/>
                <div className="p-field p-grid">
                    <label htmlFor="input" className="p-col-12 p-md-2">Payment Method:</label><br/>
                        <div className="p-col- p-md-10">
                          <InputText style={{"width":"90%"}} value={pay} required onChange={(e) => setPay(e.target.value)} placeholder="Enter your payment method" />
                        </div>
                </div><br/><br/>
                <Button style={{"width":"10%"}} label="SAVE"  onClick={handleUpdate}/>
            </div>
        </>
    )
}
export default Edit
