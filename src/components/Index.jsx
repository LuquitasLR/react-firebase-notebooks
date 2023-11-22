import './css/Index.css';
import NavBar from './NavBar.jsx';
const Index = ({title, intro,buy}) => {


return (
<>
<NavBar/>
<div className='index'>    
    <div>
        <h1>{title}</h1>
    </div>
    <div>
        <h2>{intro}</h2>
    </div>
    <div>
        <h3>{buy}</h3>
    </div>
</div>
</>
)};

export default Index;