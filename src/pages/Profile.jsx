const Profile = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));    
    return (
        <div className="profile">
            {
                <div>
                    <h1>name : {user?.full_name}</h1>
                    <h1>email : {user?.email}</h1>
                </div>
            }
        </div>
    )
}

export default Profile
