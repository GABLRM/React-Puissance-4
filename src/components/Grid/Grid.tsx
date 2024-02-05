import './Grid.css';
import Column from '../Column/Column';
import {
    RecoilRoot,
  } from 'recoil';

const Grid = () => {
    
    return (
        <RecoilRoot>
            <div className="grid">
                <Column idCol={6} />
                <Column idCol={5} />
                <Column idCol={4} />
                <Column idCol={3} />
                <Column idCol={2} />
                <Column idCol={1} />
                <Column idCol={0} />
            </div>
        </RecoilRoot>
    );
  };
  
  export default Grid;