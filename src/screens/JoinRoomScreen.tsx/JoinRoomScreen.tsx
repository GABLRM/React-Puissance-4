import './JoinRoomScreen.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../atoms/UserState';

const JoinRoomScreen = () => {

    const [user, setUser] = useRecoilState(userState);
    const [username, setUsername] = useState('');
    const [roomId, setRoomId] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const JoinRoom = () => {

        if (!username || !roomId) {
            setError('Username and Room Id are required');
            return;
        }

        if (isNaN(parseInt(roomId)) || parseInt(roomId) < 0) {
            setError('Room Id should be a positive number');
            return;
        }

        setUser({
            ...user,
            username
        })

        navigate(`/room/${roomId}`);
    }
    return (
        <>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="input" />
            <input type="number" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Room Id" className="input roomId" />
            <button onClick={JoinRoom}>Join room</button>
            {error && (
                <span className="error">{error}</span>
            )}
        </>
    )
};

export default JoinRoomScreen;