import React from "react";

// Icons
    import PersonIcon from '@mui/icons-material/Person';
    import HomeIcon from '@mui/icons-material/Home';
    import InfoIcon from '@mui/icons-material/Info';
    import InputIcon from '@mui/icons-material/Input';
    import ArticleIcon from '@mui/icons-material/Article';
// Icons

const Sidebar = ()=>{
    return(
        <div className="sidebar">
        <ul>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            
                <a className="sidebarIcons links" href="/"><HomeIcon/></a>
                <li></li>
                <li></li>
                <li></li>
            
                <a className="sidebarIcons links" href="/home"><InputIcon/></a>
                <li></li>
                <li></li>
                <li></li>
            
                <a className="sidebarIcons links" href="/docs"><ArticleIcon/></a>
                <li></li>
                <li></li>
                <li></li>
            
                <a className="sidebarIcons links" href="/login"><PersonIcon/></a>
                <li></li>
                <li></li>
                <li></li>
            
                <a className="sidebarIcons links" href="/about"><InfoIcon/></a>
                <li></li>
                <li></li>
                <li></li>
        </ul>
    </div>
    )
}
export default Sidebar;


