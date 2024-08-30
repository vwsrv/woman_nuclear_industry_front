import { ProfilFieldListProps } from './types';
import ProfileField from './profile-field';

const ProfileFieldList: React.FC<ProfilFieldListProps> = ({ fields }) => {
  return (
    <>
      {fields.map(field => (
        <ProfileField title={field.title} value={field.value}/>
      ))}
    </>
  )
}

export default ProfileFieldList;