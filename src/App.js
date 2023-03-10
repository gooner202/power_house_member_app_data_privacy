import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="">
                    <div className="mx-4 my-5">
                        <h3 className='text-success'>Privacy Policy for Power House Member</h3>

                        <p>Power House Member is a simple mobile app designed for gym members to check-in at the gym.
                            The app displays QR Code which is scanned to verify membership.
                            We care about your privacy and security of your personal information</p>
                    </div>

                    <div>

                        <ul className="list-item">
                            <li className='list-group-item'>
                                <span className="h6">1. Children's Privacy</span>: The app does not collect
                                personal information from children or adults.
                            </li>
                            <li className="list-group-item">
                                <span className="h6">2. Purpose of data collection</span>: During login, only membership
                                ID is collectd inorder to verify a
                                user's membership status and confirm their check-in at a specific location.
                            </li>

                            <li className="list-group-item">
                                <span className="h6">3. Types of data collected</span>: The app collects only the
                                membership ID
                                data, which is scanned from a QR code.
                            </li>

                            <li className="list-group-item">
                                <span className="h6">4. Data storage and security</span>: The membership ID data is
                                stored on secure servers and is only accessible by authorized personnel for the purpose
                                of check-in verification. The app also uses appropriate security measures to protect
                                against unauthorized access to the data.
                            </li>

                            <li className="list-group-item">
                                <span className="h6">5. Data sharing</span>: The membership ID data will not be shared
                                with any third parties, except as necessary for the operation of the check-in service or
                                as required by law.
                            </li>

                            <li className="list-group-item">
                                <span className="h6">6. Data retention</span>: The membership ID data will be retained
                                for as long as necessary for the operation of the check-in service, and will be deleted
                                from our servers upon request or upon termination of a user's
                                membership.
                            </li>

                            <li className="list-group-item">
                                <span className="h6">7. User rights</span>: Users have the right to request access to
                                their membership ID data and request its deletion. They also have the right to request
                                that their membership ID data is not used for direct
                                marketing.
                            </li>

                            <li className="list-group-item">
                                <span className="h6">8. Contact</span>: For any questions or concerns regarding this
                                data policy or the handling of your membership ID data, please
                                contact us at [<span className='text-primary'>bunjabarra100@gmail.com</span>].
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
