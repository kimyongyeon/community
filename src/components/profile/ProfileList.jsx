import { List, Avatar } from "antd";
import { useRouter } from "next/router";

const ProfileList = (props) => {
  const router = useRouter();
  return (
    <List
      dataSource={props.dataSource}
      renderItem={(item) => (
        <List.Item 
          key={item.title} 
          onClick={(e) => {
            e.preventDefault();
            router.push(`/board/${item.boardId}`);
          }}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={item.title}
            description={item.description}
          />
          <div 
            onClick={(e) => { 
              e.preventDefault() ;
              router.push(`/profile/${item.user.id}`); 
            }}
          >{item.user.nickname}</div>
        </List.Item>
      )}
    >
      {props.loading && (
        <div className="demo-loading-container">
          <Spin />
        </div>
      )}
    </List>
  );
};

export default ProfileList;
