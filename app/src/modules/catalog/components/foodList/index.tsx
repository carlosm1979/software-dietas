import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { useSelector } from "react-redux"

export const FoodList = () => {
    const list = useSelector((state: any) => state.foods.foodList)
    return (
        <List >
            {list && list.map((item: any) => {
        return ( <ListItem>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.image} />
            </ListItemAvatar>
            <ListItemText primary={String(item)} />
          </ListItem>)
    })}
       
       
      </List>)
    
    
  
}