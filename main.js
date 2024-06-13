import React from "react";
import Customers from "./customer";
import { Link, useNavigate } from "react-router-dom";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";   
import "primeflex/primeflex.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function Main() {
    const navigate = useNavigate();

    const handleEdit = (Order_id, Name, Address, Food_items, Payment) => {
        localStorage.setItem('Order_id', Order_id);
        localStorage.setItem('name', Name);
        localStorage.setItem('addr', Address);
        localStorage.setItem('food', Food_items);
        localStorage.setItem('pay', Payment);
        navigate('/edit');
    };

    const handleDelete = (Order_id) => {
        const index = Customers.findIndex(customer => customer.Order_id === Order_id);
        if (index !== -1) {
            Customers.splice(index, 1);
            navigate('/');
        }
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Link to="/edit">
                    <Button
                        label="EDIT"
                        onClick={() =>
                            handleEdit(
                                rowData.Order_id,
                                rowData.Name,
                                rowData.Address,
                                rowData.Food_items,
                                rowData.Payment
                            )
                        }
                        className="p-button-warning p-mr-2"
                    />
                </Link>
                &nbsp;
                <Button
                    label="DELETE"
                    onClick={() => handleDelete(rowData.Order_id)}
                    className="p-button-danger"
                />
            </>
        );
    };

    return (
        <div>
            <h1 style={{"textAlign":"center"}}>Customer Details</h1>
            <br />
            <div className="p-card ml-7 mr-7">
                <DataTable value={Customers} className="p-datatable-gridlines">
                    <Column field="Order_id" header="Order ID" ></Column>
                    <Column field="Name" header="Name"></Column>
                    <Column field="Address" header="Address"></Column>
                    <Column field="Food_items" header="Food Items"></Column>
                    <Column field="Payment" header="Payment" ></Column>
                    <Column header="Actions" body={actionBodyTemplate}></Column>
                </DataTable>
                <br />
                    <Link to="/create">
                        <Button label="CREATE" className="p-button-success" style={{ width: "100%" }} />
                    </Link>
            </div>
        </div>
    );
}

export default Main;
