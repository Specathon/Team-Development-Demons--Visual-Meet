import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './DashboardProfile.scss';
import ProfilePic from '../../assets/male_avatar.png';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    profileEditButton: {
        position: "sticky",
        right: "5rem",
        bottom: "2rem",
        borderRadius: "50%",
        marginLeft: "2rem",
        width: "2rem !important",
        height: "4rem",
        transition: "0.3s",
        '&:hover': {
            background: "#77f496",
            color: "#fff"
        },
    },
    editIcon: {
        fontSize: "2rem"
    }
});

function DashboardProfile(props) {
    const classes = useStyles(props);
    return (
        <div className="dashboardProfile">
            <div className="dashboardProfileBackground">
                <h1 className="dashboardProfileHeading pt-5">PROFILE</h1>
                <br/>
                <div className="dashboardProfileHeader">
                    <img src={ProfilePic} alt="User Profile pic"  className="dashboardProfileUserProfilePic"></img>
                    <p className="dashboardProfileUserProfileName">Damon Salvatore</p><br/>
                </div>
            </div>
            <div style={{textAlign:"center", fontFamily: "Balsamiq Sans, cursive"}}>
                <h1 className="dashboardProfileAttributes">Name: </h1><br/>
                <p className="dashboardProfileValues">Damon Salvatore</p><br/>
                <h1 className="dashboardProfileAttributes">Roll Number: </h1><br/>
                <p className="dashboardProfileValues">19H51A05G2</p><br/>
                <h1 className="dashboardProfileAttributes">Email: </h1><br/>
                <p className="dashboardProfileValues">damonsalvatore@gmail.com</p><br/>
                <h1 className="dashboardProfileAttributes">Section: </h1><br/>
                <p className="dashboardProfileValues">S06</p><br/>
                <h1 className="dashboardProfileAttributes">About Me: </h1><br/>
                <input id="txt" type="text" className="dashboardProfileValues" onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';"></input><br/>
            </div>
            <Button variant="outlined" className={classes.profileEditButton}>
                <EditIcon className={classes.editIcon}></EditIcon>
            </Button>
        </div>
    )
}

export default DashboardProfile;
