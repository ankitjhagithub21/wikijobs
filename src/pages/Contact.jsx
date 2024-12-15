import Input from "../components/Input";
import { CiLocationOn, CiMail, CiPhone, CiUser } from "react-icons/ci";
const Contact = () => {
  return (
    <section className="py-24 px-5 min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-5 bg-white shadow rounded-lg">
        <form>
          <Input
            type={"text"}
            label={"First Name"}
            icon={<CiUser />}
            name={"firstName"}
            id={"firstName"}
            placeholder={"First Name."}
          />
          <Input
            type={"text"}
            label={"Last Name"}
            icon={<CiUser />}
            name={"lastName"}
            id={"lastName"}
            placeholder={"Last Name."}
          />
          <Input
            type={"email"}
            label={"Email"}
            icon={<CiMail />}
            name={"email"}
            id={"email"}
            placeholder={"Email Id."}
          />
          <Input
            type={"text"}
            label={"Mobile"}
            icon={<CiPhone />}
            name={"mobile"}
            id={"mobile"}
            placeholder={"Mobile Number."}
          />
          <div>
            <label
              htmlFor="gender"
              className="text-gray-600 font-semibold inline-block mb-2 text-sm"
            >
              Gender
            </label>

            <select
              name="gender"
              id="gender"
              className="w-full outline-none p-3 form-group"
            >
              <option disabled>Select One</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Input
            type={"text"}
            label={"Location"}
            icon={<CiLocationOn />}
            name={"location"}
            id={"location"}
            placeholder={"Location"}
          />

          <div>
            <label
              htmlFor="status"
              className="text-gray-600 font-semibold inline-block mb-2 text-sm"
            >
              Work Status
            </label>

            <select
              name="status"
              id="status"
              className="w-full outline-none p-3 form-group"
            >
              <option disabled>Select One</option>
              <option value="male">Interns</option>
              <option value="female">Fresher</option>
              <option value="other">Experience</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#281BCB] rounded hover:bg-blue-600 text-white p-2 w-full mt-5 text-sm"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
