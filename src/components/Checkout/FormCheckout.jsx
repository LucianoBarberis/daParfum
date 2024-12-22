const Form = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
            <form onSubmit={handleSubmitForm} className="form">

                <span className="input-span">
                    <label htmlFor="nombre" className="label">Nombre</label>
                    <input type="text" name="fullname" id="nombre" value={dataForm.fullname} onChange={handleChangeInput} />
                </span>

                <span className="input-span">
                    <label htmlFor="phone" className="label">Telefono</label>
                    <input type="number" name="phone" id="phone" value={dataForm.phone} onChange={handleChangeInput} />
                </span>

                <span className="input-span">
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" name="email" id="email" value={dataForm.email} onChange={handleChangeInput} />
                </span>

                <span className="input-span">
                    <label htmlFor="repeatEmail" className="label">Repetir email</label>
                    <input type="repeatEmail" name="repeatEmail" id="repeatEmail" value={dataForm.RepeatEmail} onChange={handleChangeInput} />
                </span>

                <button className="buttonAlt submit" type="submit">Enviar</button>
            </form>
    );
}

export default Form