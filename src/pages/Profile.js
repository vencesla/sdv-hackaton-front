import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import MatchList from '../components/MatchList';
import API from '../utils/API';
import { useEffect } from 'react';

import {ArrowLeft, CheckCircleFill} from 'react-bootstrap-icons';
import NavTab from "../components/NavTab";
import { useHistory } from "react-router-dom";

const Profile = ({ user, refreshUser }) => {

    let history = useHistory();

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
                //navigate('/dashboard');
                history.push('/dashboard');
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
            <section>
                <MatchList user={user} refreshUser={refreshUser}/>
            </section>

            <div className="profile-core">
                <div className="profile-page">
                    <div className="phone-screen">
                        <div className="profile-top">
                            <Link className="profile-back" to="/dashboard"><ArrowLeft/></Link>
                            <h2 className="pb-3">Modifier votre profil</h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    className="form-control"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
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
                                    required
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
                                    min="1"
                                    max="150"
                                    required
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
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" required
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
                                    required
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
                <NavTab/>
            </div>
        </div>
    );
};

export default Profile;