import Head from 'next/head';
import Bar from '../components/Bar';
import { frontendSkills, backendSkills } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimations } from '../animations';

const Resume = () => {
	return (
		<motion.div
			className="px-6 py-2"
			variants={routeAnimations}
			exit="exit"
			initial="initial"
			animate="animate"
		>
			<Head>
				<title>Resume | Rangdra Pangestu</title>
			</Head>
			{/* Education */}
			<div className="grid gap-6 md:grid-cols-2">
				<motion.div variants={fadeInUp} initial="initial" animate="animate">
					<h5 className="my-3 text-2xl font-bold">Education</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">Information System</h5>
						<p className="font-semibold">
							STMIK Pranata Indonesia (2019 - 2023)
						</p>
						<p className="my-3">
							Bachelor of Computer <br /> Major in Information System;
							Cumulative GPA: 3.58/4.0.
							{/* I am currently pursuing S.Kom in Information System from STMIK
              Pranata Indonesia */}
							{/* Saat ini saya sedang menempuh pendidikan Strata I jurusan Sistem
              Informasi di STMIK Pranata Indonesia */}
							{/* I am currently studying Strata I majoring in Information Systems
              at STMIK Pranata Indonesia */}
						</p>
					</div>
				</motion.div>

				<motion.div variants={fadeInUp} initial="initial" animate="animate">
					<h5 className="my-3 text-2xl font-bold">Experience</h5>
					<div>
						{/* Jabatan */}
						<h5 className="my-2 text-xl font-bold">Associate Developer</h5>
						{/* Office name */}
						<p className="font-semibold">
							PT. Vanz Inovatif Teknologi (Dec, 2022 - Present)
						</p>
						{/* Desc Job */}
						<p className="my-3">
							<ul className="list-disc">
								<li>
									Build, maintain, and develop applications (Mobile, CMS, and
									Web) using React Native and React JS/Next JS, integrate
									functionality and consume RESTFul API.
								</li>
								<li>
									Build and Provide RESTFul API using Nest JS for Development
									Needs.
								</li>
								<li>
									Collaborate with the UI/UX to turn the design into code.
								</li>
								<li>
									Collaborate with QA to ensure the application performance runs
									Smoothly and Bug-Free.
								</li>
								<li>Learn to write Reusable and Clean Code.</li>
							</ul>
						</p>
					</div>
				</motion.div>
			</div>

			{/* Skills */}
			<div className="mt-4">
				<h2 className="text-2xl font-bold">Technical Skills</h2>
				{/* <h3>Skills I learned</h3> */}
				<div className="grid gap-6 md:grid-cols-2">
					<div>
						<h5 className="my-3 text-xl font-bold">Front-end Development</h5>
						<div className="my-2">
							{frontendSkills.map((language) => (
								<Bar data={language} key={language.name} />
							))}
						</div>
					</div>{' '}
					<div>
						<h5 className="my-3 text-xl font-bold">Back-end Development</h5>
						<div className="my-2">
							{backendSkills.map((tool) => (
								<Bar data={tool} key={tool.name} />
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Resume;
