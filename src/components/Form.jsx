import React from 'react'

export const Form = () => {
    return (
        <div>
            <form>
                <h3>Form</h3>
                <hr />
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='enter your name' />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='enter your email' />
                </div>

                <div>
                    <label htmlFor='name'>Gender</label>
                    <input type='radio' placeholder='enter your name' value='male' name='gender'/>male
                    <input type='radio' value='female' name='gender'/>Female
                </div>

                <div>
                   <select>
                    <option>Select</option>
                    <option value="">Nitesh</option>
                    <option value="">Sir</option>
                   </select>
                </div>


            </form>

        </div>
    )
}
