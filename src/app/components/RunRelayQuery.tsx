import React, { useState } from 'react';
import { CSSObjectWithLabel, GroupBase } from 'react-select';
import Creatable from 'react-select/creatable';
interface Constraint {
    filterType: string;
    kind: number;
    author: string;
    tagType: string;
    tagValue: string;
  }

  const RunRelayQuery = () => {
  const [constraints, setConstraints] = useState<Array<Constraint>>([]);
  const [filterType, setFilterType] = useState<string>("");
  const [queryResult, setQueryResult] = useState('');

  const handleAddConstraint = () => {
    setConstraints([...constraints, { author: '', tagType: '', tagValue: '', kind: 0, filterType: "" }]);
  };

  const handleRemoveConstraint = (index: number) => {
    const updatedConstraints = [...constraints];
    updatedConstraints.splice(index, 1);
    setConstraints(updatedConstraints);
  };

  const handleConstraintChange = (index: number, field: string, value: string) => {
    const updatedConstraints: any = [...constraints];
    updatedConstraints[index][field] = value;
    setConstraints(updatedConstraints);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Perform the relay query logic here
    // Replace the following line with your actual logic
    setQueryResult('Query result');
  };

  const kindOptions = [
    { value: '', label: 'Select Kind' },
    { value: '0', label: 'Metadata' },
    { value: '1', label: 'Short Text Note' },
    { value: '2', label: 'Recommend Relay' },
    { value: '3', label: 'Contacts' },
    { value: '4', label: 'Encrypted Direct Messages' },
    { value: '5', label: 'Event Deletion' },
    { value: '6', label: 'Repost' },
    { value: '7', label: 'Reaction' },
    { value: '8', label: 'Badge Award' },
    { value: '9', label: 'Resources' },
    { value: '32', label: 'Reputation' },
    { value: '40', label: 'Channel Creation' },
    { value: '41', label: 'Channel Metadata' },
    { value: '42', label: 'Channel Message' },
    { value: '43', label: 'Channel Hide Message' },
    { value: '44', label: 'Channel Mute User' },
  ];

  const filterOpts = [
    { value: '', label: 'Select Filter' },
    { value: 'author', label: 'Author' },
    { value: 'kind', label: 'Event Kind' },
    { value: 'tag', label: 'Tag' },
  ];

  const customStyles = {
    control: (base: CSSObjectWithLabel) => ({
      ...base,
      background: "#000000",
      color: "#111111"
    }),
    menu: (base: CSSObjectWithLabel) => ({
      ...base,
      background: "#000000",
      color: "#111111"
    }),
    option: (base: CSSObjectWithLabel, state: any) => ({
      ...base,
      backgroundColor: state.isFocused ? '#444444' : '#000000',
      color: state.isFocused ? '#ffffff' : '#dddddd',
    }),
    menuList: (base: CSSObjectWithLabel) => ({
      ...base,
      background: "#000000",
      color: "#444444"
    })
  };


  return (
    <div>
      <h2>Run a Relay Query</h2>
      <form onSubmit={handleSubmit}>
        {constraints.map((constraint, index) => (
          <view key={index} style={{flex:1}}>
            <select
              value={constraint.filterType}
              onChange={(e) => handleConstraintChange(index, 'filterType', e.target.value)}
            >
              {filterOpts.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {constraint.filterType === 'kind' && (
                <Creatable
                styles={customStyles}
                classNamePrefix="select"
                options={kindOptions}
                value={kindOptions.find((option) => parseInt(option.value) === constraint.kind)}
                onChange={(selectedOption) => handleConstraintChange(index, 'kind', selectedOption!.value)}
                /> 
            )}
            {constraint.filterType === 'author' && (
              <input
                type="text"
                placeholder="Enter author"
                value={constraint.author}
                onChange={(e) => handleConstraintChange(index, 'author', e.target.value)}
              />
            )}
            {constraint.filterType === 'tag' && (
              <div>
                <select
                  value={constraint.tagType}
                  onChange={(e) => handleConstraintChange(index, 'tagType', e.target.value)}
                >
                  <option value="">Select Tag Type</option>
                  {/* Add your tag type options here */}
                </select>
                <input
                  type="text"
                  placeholder="Enter tag value"
                  value={constraint.tagValue}
                  onChange={(e) => handleConstraintChange(index, 'tagValue', e.target.value)}
                />
              </div>
            )}
            <button type="button" onClick={() => handleRemoveConstraint(index)}>
              Remove
            </button>
          </view>
        ))}
        <button type="button" onClick={handleAddConstraint}>
          Add Constraint
        </button>
        <button type="submit">Submit</button>
      </form>
      {queryResult && <p>{queryResult}</p>}
    </div>
  );
};

export default RunRelayQuery;
