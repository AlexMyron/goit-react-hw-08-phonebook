import { BiSearchAlt } from 'react-icons/bi';
import { Label, Wrapper } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { getFilter, getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h3>Find contact</h3>
      <Label>
        <input
          type="text"
          name="filter"
          onChange={e => dispatch(actions.addFilter(e.currentTarget.value))}
          value={filter}
          autocomplete="off"
        />
        {/* <BiSearchAlt size="18" /> */}
      </Label>
    </Wrapper>
  );
};

export default Filter;
