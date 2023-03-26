import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import AboutUs from "./component/AboutUs";

function App() {
	const formik = useFormik({
		initialValues: {
			firstname: "",
			lastname: "",
			email: "",
			saran: "",
		},
		validationSchema: Yup.object().shape({
			firstname: Yup.string().min(3, "Nama Depan minimal 3 huruf").required(),
			lastname: Yup.string().min(3, "Nama Belakang minimal 3 huruf").required(),
			email: Yup.string().email("Isi email yang valid").required(),
			saran: Yup.string().min(1, "Minimal 1 huruf").required(),
		}),
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			alert(JSON.stringify(values, null, 2));
			resetForm({ values: "" });
		},
	});
	return (
		<div className="bg-dark text-white">
			<Navbar />
			<Hero />
			<ContactUs formik={formik} />
			<AboutUs />
			<Footer />
		</div>
	);
}

export default App;
