import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const NotPermission = () => {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate('/');
  };
  return (
    <Result
      status={403}
      title={'你好，您没有权限访问此页面'}
      extra={[
        <Button type='default' key={'back'} onClick={handleCLick}>
          返回首页
        </Button>
      ]}
    />
  );
};
export default NotPermission;
