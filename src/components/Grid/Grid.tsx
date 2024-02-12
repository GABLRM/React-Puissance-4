import './Grid.css';
import Column from '../Column/Column';

const Grid = () => {

    return (
        <div className="grid">
            <Column idCol={0} />
            <Column idCol={1} />
            <Column idCol={2} />
            <Column idCol={3} />
            <Column idCol={4} />
            <Column idCol={5} />
            <Column idCol={6} />
        </div>
    );
};

export default Grid;