const UserProfile = () => {
    const username = localStorage.getItem('username');
    
    return (
        <div>
            <h5>Halaman UserProfile : {username}</h5>
        </div>
    );
}

export default UserProfile;