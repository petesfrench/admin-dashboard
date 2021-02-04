import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import GroupCard from '../../components/partials/cards/GroupCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import { activateBlur, deactivateBlur } from '../../redux/actions/dialogblur-actions';
import Dialog from '../../components/partials/dialogs/Dialog';
import TemplateForm from '../../components/partials/inputFields/TemplateForm';
import TemplateInput from '../../components/partials/inputFields/TemplateInput';
import { showDialog } from '../../redux/actions/dialogstatus-actions';

interface Props { }

const Groups: React.FunctionComponent<Props> = ({ groupName }) => {
  const dispatch = useDispatch();
  const dialogblur = useSelector((state) => state.dialogblurReducer);
  const dialogStatus = useSelector((state) => state.dialogStatusReducer);

  const addGroup = () => {
    console.log('add users');
    dispatch(activateBlur());
    dispatch(showDialog('GROUPS_DIALOG'));
    console.log('hello');
  };

  console.log(dialogStatus);

  return (
    <>
      <Dialog active={dialogStatus.groups === 'active'}>
        <TemplateForm buttonText="Add User">
          <TemplateInput labelText="Name of Group" type="text" />
          <TemplateInput labelText="Description" type="text" />
          <TemplateInput labelText="Access from" type="dropdown" dropdownOptions={['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']} />
          <TemplateInput labelText="Access to" type="dropdown" dropdownOptions={['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']} />
          <TemplateInput labelText="Allowed doors" type="radio" radioOptions={['Main Entry', 'Cafeteria', 'Leo\'s Office', 'Berta\'s Office']} />
        </TemplateForm>
      </Dialog>
      <DashboardLayout>
        <button onClick={addGroup}>Add Group</button>
        <CardWrapper>
          <GroupCard groupName="Teacher" />
          <GroupCard groupName="Teacher Assistant" />
          <GroupCard groupName="Student" />
          <GroupCard groupName="Service Personal" />
        </CardWrapper>
      </DashboardLayout>
    </>
  );
};

export default Groups;
