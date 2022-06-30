import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MatchList from '../components/MatchList';
import API from '../utils/API';
import { useEffect } from 'react';

const Profile = ({ user, refreshUser }) => {

    useEffect(() => {
        setFormData({
            firstName: user?.firstName ?? '',
            lastName: user?.lastName ?? '',
            age: user?.age ?? 0,
            description: user?.description ?? '',
            phoneNumber: user?.phoneNumber ?? '',
            gender: user?.gender ?? '',
            country: user?.country ?? ''
        });
    }, [user]);

    const [formData, setFormData] = useState({
        firstName: user?.firstName ?? '',
        lastName: user?.lastName ?? '',
        age: user?.age ?? 0,
        description: user?.description ?? '',
        phoneNumber: user?.phoneNumber ?? '',
        gender: user?.gender ?? '',
        country: user?.country ?? ''
    });

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.put('/user', {
                ...formData,
                id: user.id,
                email: user.email
            });
            const success = response.status === 200;
            if (success) {
                refreshUser();
                navigate('/dashboard');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;

        setFormData(() => ({
            ...formData,
            [name]: value
        }));
    };

    return (
        <div className="dashboard">
            <MatchList user={user}/>

            <div className="profile-page">
                <div className="phone-screen">
                    <h2 className="pb-3">Modifier votre profil</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                id="firstName"
                                name="firstName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <label htmlFor="firstName">Prénom</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                id="lastName"
                                name="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <label htmlFor="lastName">Nom</label>
                        </div>

                        <div className="form-floating mb-3">
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                        />
                            <label htmlFor="description">Description</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                id="age"
                                name="age"
                                className="form-control"
                                value={formData.age}
                                onChange={handleChange}
                            />
                            <label htmlFor="age">Age</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            <label htmlFor="phoneNumber">Téléphone</label>
                        </div>

                        <div className="mb-3">
                            <label>Je recherche</label>
                        </div>

                        <div className="btn-group mb-4" role="group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1"
                                   checked={formData.gender === 'employee'} value="employee" onClick={() => formData.gender = 'employee'} onChange={handleChange}/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">Une entreprise</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2"
                                   checked={formData.gender === 'employer'} value="employer" onClick={() => formData.gender = 'employer'} onChange={handleChange}/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio2">Un talent</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                id="country"
                                name="country"
                                className="form-control"
                                value={formData.country}
                                onChange={handleChange}
                            />
                            <label htmlFor="country">Pays</label>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success w-100"
                        >
                            Valider
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;