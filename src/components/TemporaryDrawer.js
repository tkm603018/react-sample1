import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ClassIcon from '@material-ui/icons/Class';
import GrainIcon from '@material-ui/icons/Grain';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import TerrainSharpIcon from '@material-ui/icons/TerrainSharp';
import LocalFloristOutlinedIcon from '@material-ui/icons/LocalFloristOutlined';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LinkPortfolio from '../Link/LinkPortfolio';
import LinkSpring from '../Link/LinkSpring';
import LinkSummer from '../Link/LinkSummer';
import LinkAutum from '../Link/LinkAutum';
import LinkWinter from '../Link/LinkWinter';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false,});

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[<LinkPortfolio />, <LinkSpring />, <LinkSummer />, <LinkAutum />, <LinkWinter />].map((text, index) => (
          <ListItem button key={text}>
                <ListItemIcon>
                    {(() => {
                        if (index === 0) {
                            return <ClassIcon />
                        } else if (index === 1) {
                            return <LocalFloristOutlinedIcon />
                        } else if (index === 2) {
                            return <WbSunnyIcon />
                        } else if (index === 3) {
                            return <TerrainSharpIcon />
                        } else if (index === 4) {
                            return <GrainIcon />
                        }
                    })()}
                </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Projects', 'Works', 'FaceBook', 'Instagram', 'Twitter'].map((text, index) => (
          <ListItem button key={text}>
                {(() => {
                        if (index === 0) {
                            return <FontAwesomeIcon icon={['fab', 'youtube']} />
                        } else if (index === 1) {
                            return <FontAwesomeIcon icon={['fab', 'facebook']} />
                        } else if (index === 2) {
                            return <FontAwesomeIcon icon={['fab', 'instagram']} />
                        } else if (index === 3) {
                            return <FontAwesomeIcon icon={['fab', 'twitter']} />
                        } else if (index === 4) {
                            return <FontAwesomeIcon icon={['fab', 'line']} />
                        }
                    })()}
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <div className="TemporaryDrawer">
      <Button onClick={toggleDrawer('left', true)}>
        <div className="Icon">
          <div></div>
          <div></div><div></div>
        </div>
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );

}