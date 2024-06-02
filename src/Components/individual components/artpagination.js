import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const ArtPagination = ({ currentPage, totalPages, handlePageChange }) => {
  let liTags = [];
  const beforePage = currentPage - 1;
  const afterPage = currentPage + 1;

  if (currentPage > 1) {
    liTags.push(
      <li key="prev" className="btn prev" onClick={() => handlePageChange(currentPage - 1)}>
        <span><FontAwesomeIcon icon={faAngleLeft} /> Prev</span>
      </li>
    );
  }

  if (currentPage > 2) {
    liTags.push(
      <li key="first" className="first numb" onClick={() => handlePageChange(1)}>
        <span>1</span>
      </li>
    );
    if (currentPage > 3) {
      liTags.push(<li key="dots1" className="dots"><span>...</span></li>);
    }
  }

  for (let plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages || plength <= 0) {
      continue;
    }
    let active = (currentPage === plength) ? 'active' : '';
    liTags.push(
      <li key={plength} className={`numb ${active}`} onClick={() => handlePageChange(plength)}>
        <span>{plength}</span>
      </li>
    );
  }

  if (currentPage < totalPages - 1) {
    if (currentPage < totalPages - 2) {
      liTags.push(<li key="dots2" className="dots"><span>...</span></li>);
    }
    liTags.push(
      <li key="last" className="last numb" onClick={() => handlePageChange(totalPages)}>
        <span>{totalPages}</span>
      </li>
    );
  }

  if (currentPage < totalPages) {
    liTags.push(
      <li key="next" className="btn next" onClick={() => handlePageChange(currentPage + 1)}>
        <span>Next <FontAwesomeIcon icon={faAngleRight} /></span>
      </li>
    );
  }

  return (
    <div className="paginations">
      <ul>
        {liTags}
      </ul>
    </div>
  );
};