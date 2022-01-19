import React, {useEffect, useState} from 'react';

const ContactModal = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setIsValid(() => {
            return name.length > 0
                && phone.length > 0
                && email.length > 0
        })
    }, [name, phone, email]);

    return (
        <div>
            <form data-testid={'contact-modal-form'}>
                <input required
                       value={name}
                       placeholder={'Name'}
                       onChange={event => setName(event.target.value)}
                />
                <input required
                       value={phone}
                       placeholder={'Phone Number'}
                       onChange={event => setPhone(event.target.value)}
                />
                <input required
                       value={email}
                       placeholder={'Email Address'}
                       onChange={event => setEmail(event.target.value)}
                />

                <button disabled={!isValid}>Submit</button>
            </form>
        </div>
    );
};

export default ContactModal;