import React from 'react';

const ANONYMOUS = 'anonimous';

// @ts-ignore
const RoleLabel = ({ record, property }) => {
  const [levelName, setLevelName] = React.useState(ANONYMOUS);

  React.useEffect(() => {
    const levelId = record.params[property.name];
    if (levelId) {
      fetch(`/api/resources/roles/records/${levelId}/show`)
        .then((res) => res.json())
        .then((data) => data.record)
        .then((level) => {
          if (level && level.title) {
            setLevelName(level.title);
          }
        })
        .catch(() => {
          setLevelName(ANONYMOUS);
        });
    } else {
      setLevelName(ANONYMOUS);
    }
  }, [record]);

  return <span>{levelName}</span>;
};

export { RoleLabel };
export default RoleLabel;
