import Nav from "../components/Nav";
import {useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Profile = () =>{

    const [cookies] = useCookies(null)

    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name: "",
        dob_born: "",
        show_gender: false,
        gender_identity: "man",
        gender_interest: "woman",
        url: "",
        about: "",
        matches: []
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/user', {formData})
            console.log(response)
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
            />

            <div className="onboarding">
                <h2>Créer votre profile</h2>

                <form onSubmit={handleSubmit}>
                      <section>
                          <div className="form-group required">
                              <label className="control-label" htmlFor="first_name">Nom</label>
                          </div>
                          <input
                              id="last_name"
                              type='text'
                              name="last_name"
                              placeholder="Votre nom"
                              required={true}
                              value={formData.first_name}
                              onChange={handleChange}
                          />

                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="form-group required">
                                      <label className="control-label">date de Naissance</label>
                                  </div>
                                  <div className="multiple-input-container">
                                      <input
                                          id="dob_day"
                                          type="date"
                                          name="dob_born"
                                          required={true}
                                          value={formData.dob_day}
                                          onChange={handleChange}
                                      />
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <label>Age</label>
                                  <div className="multiple-input-container">
                                      <input
                                          id="age"
                                          type="text"
                                          name="age"
                                          className="form-control"
                                          min="10" max="100"
                                          required={true}
                                          value={formData.age}
                                          onChange={handleChange}
                                      />
                                  </div>
                              </div>

                          </div>
                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="form-group required">
                                      <label className="control-label">Code Postal</label>
                                  </div>
                                  <div className="multiple-input-container">
                                      <input
                                          id="cp"
                                          type="text"
                                          name="email"
                                          className="form-control"
                                          required={true}
                                          value={formData.cp}
                                          onChange={handleChange}
                                      />
                                  </div>

                              </div>
                              <div className="col-lg-6">
                                  <div className="form-group required">
                                      <label className="control-label">Ville</label>
                                  </div>
                                  <div className="multiple-input-container">
                                      <input
                                          id="email"
                                          type="text"
                                          name="ville"
                                          className="form-control"
                                          required={true}
                                          value={formData.ville}
                                          onChange={handleChange}
                                      />
                                  </div>

                              </div>
                          </div>

                          <div className="form-group required">
                              <label className="control-label">Fonction</label>
                          </div>
                          <div className="multiple-input-container">
                              <input
                                  id="man-gender-identity"
                                  type="radio"
                                  name="gender_identity"
                                  className="form-control"
                                  value="employeur"
                                  onChange={handleChange}
                                  checked={formData.gender_identity === "employeur"}
                              />
                              <label htmlFor="man-gender-identity">Employeur</label>
                              <input
                                  id="woman-gender-identity"
                                  type="radio"
                                  name="gender_identity"
                                  className="form-control"
                                  value="employe"
                                  onChange={handleChange}
                                  checked={formData.gender_identity === "employe"}
                              />
                              <label htmlFor="woman-gender-identity">Employé</label>
                          </div>

                          <div className="form-group required">
                              <label className="control-label" htmlFor="show-gender">Montrer mon profile</label>
                          </div>
                          <input
                              id="show-gender"
                              type="checkbox"
                              name="show_gender"
                              onChange={handleChange}
                              checked={formData.show_gender}
                          />

                          <div className="form-group required">
                              <label className="control-label">Recherche</label>
                          </div>

                          <div className="multiple-input-container">
                              <input
                                  id="man-gender-interest"
                                  type="radio"
                                  className="form-control"
                                  name="gender_interest"
                                  value="stage"
                                  onChange={handleChange}
                                  checked={formData.gender_interest === "stage"}
                              />
                              <label htmlFor="man-gender-interest">Stage</label>
                              <input
                                  id="woman-gender-interest"
                                  type="radio"
                                  name="gender_interest"
                                  value="cdd"
                                  className="form-control"
                                  onChange={handleChange}
                                  checked={formData.gender_interest === "cdd"}
                              />
                              <label htmlFor="woman-gender-interest">CDD</label>
                              <input
                                  id="everyone-gender-interest"
                                  type="radio"
                                  name="gender_interest"
                                  className="form-control"
                                  value="cdi"
                                  onChange={handleChange}
                                  checked={formData.gender_interest === "everyone"}
                              />
                              <label htmlFor="everyone-gender-interest">CDI</label>

                          </div>


                      </section>

                      <section>
                          <div className="form-group required">
                              <label className="control-label" htmlFor="url">Prenom</label>
                          </div>
                          <input
                              type="text"
                              name="first_name"
                              id="url"
                              placeholder="Votre prenom"
                              required={true}
                          />

                          <div className="form-group required">
                              <label className="control-label" htmlFor="url">Photo de profile</label>
                          </div>
                          <input
                              type="file"
                              name="photo"
                              id="photo"
                              onChange={handleChange}
                              required={true}
                          />
                          <div className="form-group required">
                              <label className="control-label" htmlFor="url">Complément adresse</label>
                          </div>
                          <input
                              type="text"
                              name="complement"
                              id="complement"
                              onChange={handleChange}
                              required={true}
                          />

                          <label htmlFor="about">Description</label>
                          <textarea
                              id="about"
                              type="text"
                              name="about"
                              rows="3"
                              className="form-control"
                              required={true}
                              placeholder="Décrivez vous en quelques mots..."
                              value={formData.about}
                              onChange={handleChange}
                          />
                          <input type="submit"/>
                          <div className="photo-container">
                              {formData.url && <img src={formData.url} alt="profile pic preview"/>}
                          </div>
                      </section>
                </form>
            </div>
        </>
    )
}

export default Profile