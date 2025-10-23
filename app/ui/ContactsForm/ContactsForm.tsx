'use client'

import './ContactsForm.css';

import { useForm } from 'react-hook-form';

import emailjs from "emailjs-com";
// import * as secrets from '../../../secret.js';





export default function ContactsForm() {

    const { register, handleSubmit } = useForm<FormData>();


    async function onSubmit(data: FormData) {

        // emailjs.init(secrets.PUBLIC_KEY ?? '');

        // const params = {
        //     sendername: data.companyEmail,
        //     to: toEmail,
        //     message: data.otherInfo,
        //     subject: `New email from ${data.firstName} ${data.lastName}; Company Name: ${data.companyName}; Phone: ${data.phoneNumber}`
        // };

        // const serviceId = secrets.SERVICE_ID ?? '';
        // const templateId = secrets.TEMPLATE_ID ?? '';

        // try {


        //     await emailjs.send(
        //         serviceId,
        //         templateId,
        //         params
        //     )


        //     alert('Email sent successfully!')

        // } catch(err) {

        // }






    }


    return (


        <div className="form-container">

            <h1 className="contacts-title text-center">Свържете се с нас</h1>


            <form className="contacts-form" method="post" onSubmit={handleSubmit(onSubmit)}>

                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="firstNameInput">
                            Име
                        </label>
                        <input
                            className="form-control"
                            aria-required="true"
                            id="firstNameInput"
                            {...register('firstName', { required: true })}
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="lastNameInput">
                            Фамилия
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="lastNameInput"
                            {...register('lastName', { required: true })}
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="companyName">
                            Име на компания
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="companyName"
                            {...register('companyName', { required: true })}
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="companyEmail">
                            Имейл на компания
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="companyEmail"
                            {...register('companyEmail', { required: true })}
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="phoneNumber">
                            Телефон
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="phoneNumber"
                            {...register('phoneNumber', { required: true })}
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="otherInfo">
                            Искате ли да споделите друга информация за вашия проект или да зададете въпроси?
                        </label>
                        <textarea

                            className="form-control"
                            aria-required="true"
                            id="otherInfo"
                            {...register('otherInfo', { required: true })}

                        />

                    </div>
                </div>



                <div className="row btn-cont mb-3 justify-content-center">

                    <div className="col-md-12">

                        <button
                            type="submit"
                            className="w-75 mx-auto btn submit-btn btn-primary"
                        >
                            Изпрати
                        </button>

                    </div>
                </div>

            </form>

        </div>


    );
}

