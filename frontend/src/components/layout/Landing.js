import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
class Landing extends Component {
	render(){
		return(
			<div>{/*?*/}
				<div className="landing">
					<div className="dark-overlay landing-inner text-light">
						
						<div className="landing-callout text-center container-fluid">
						{/*may want to fix margin on this*/}
							<h1>Welcome to !SocialCoder</h1>
							<h3>A community where prospective developers
							volunteer to assist charity and social organisations
							with software development.</h3>
						</div>

						<Container>
							<Row>
							
								<Col xs="12" sm="10" md="6">
									<Card body className="text-center CardCSS">
										<CardBody>
											<CardTitle>Developer</CardTitle>
											<CardText>Sign up for free and join the community to...</CardText>
											<Link to="/Register"><Button color="info" className="link-style2">Developer</Button></Link>
										</CardBody>
									</Card>
								</Col>

								<Col xs="12" sm="10" md="6">
									<Card body className="text-center CardCSS">
										<CardBody>
											<CardTitle>Organisation</CardTitle>
											<CardText>Sign up for free and join the community to...</CardText>
											<Link to="/Register"><Button color="info" className="link-style2">Organisation</Button></Link>
										</CardBody>						
									</Card>
								</Col>

							</Row>
						</Container>
					</div>{/*d-ol-it-l*/}
				</div>{/*landing*/}				
			</div>
		)
	}
}

export default Landing;

{/*<h2 className="text-center">Developer</h2>
										<h4>Sign up for free and join the community to...</h4>
										<br/>
										<Link to="/Register"><Button color="info" className="link-style2">Developer</Button></Link>*/}
										{/*<a href="#" className="link-style1”>Developer</a>*/}								

{/*<div className="well">
								<h2 className="text-center">Organisation</h2>
								<h4>Sign up afor free and join the community to...</h4>
								<br/>
								<Link to="/Register"><Button color="info" className="link-style2">Organisation</Button></Link>*/}
								{/*<a href="#" className="link-style1”>Developer</a>*/}								

{/*<h2 className="text-center">Developer</h2>
										<h4>Sign up for free and join the community to...</h4>
										<br/>
										<Link to="/Register"><Button color="info" className="link-style2">Developer</Button></Link>*/}
										{/*<a href="#" className="link-style1”>Developer</a>*/}
//as first appeared
// render() {
	// 	return (
	// 		<div className="landing">
	// 			<div className="dark-overlay landing-inner text-light">
	// 				
//						<div className="container">
		// 					<div className="row">

		// 						<div className="col-md-12 text-center">
		// 							<h1 className="display-3 mb-4">!SocialCodes</h1>
		// 							<p className="lead-2"> Register to join the community! </p>
		// 							<hr />
		// 							<Link to="/register" className="btn btn-lg btn-info mr-2">
		// 								Sign Up
		// 							</Link>
		// 							<Link to="/login" className="btn btn-lg btn-light">
		// 								Login
		// 							</Link>
		// 						</div>//cm12tc

		// 					</div>//row
	// 					</div>//container

	// 			</div>
	// 		</div>
	// 	);
	// }