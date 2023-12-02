// This code retuns the form that is used to update a single product

import {useContext} from 'react'

import AppContext from '../../../context/AppContext'

import { Form } from 'react-bootstrap'

import AdminNav from '../../admin_nav/AdminNav'



const ProductUpdatePage = () => {

    const {productToUpdate} = useContext(AppContext)

    if(productToUpdate){

        return(

            <div>

            <AdminNav />

            <div className='dashboard-contents'>

            <h2>Update product details</h2>

                <Form>

                    <Form.Group>

                        <Form.Label>Description</Form.Label>

                        <Form.Control placeholder={productToUpdate.description} />

                    </Form.Group>


                    <Form.Group>

                        <Form.Label>Price</Form.Label>

                        <Form.Control placeholder={productToUpdate.price} />

                    </Form.Group>


                    <Form.Group>

                        <Form.Label>Category</Form.Label>

                        <Form.Control placeholder={productToUpdate.category} />

                    </Form.Group>


                    <Form.Group>

                        <Form.Label>Rating</Form.Label>

                        <Form.Control placeholder={productToUpdate.rating} />

                    </Form.Group>


                    <Form.Group>

                        <button className='submit-btn'>Update</button>

                    </Form.Group>


                </Form>


            </div>
                
            </div>
        )

    } else{

        return(

            <div>

                <h2>No product was selected.</h2>
                
            </div>
        )
    }



}

export default ProductUpdatePage