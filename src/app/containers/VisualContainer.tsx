import React, { useState } from 'react';
import { ParentSize } from '@visx/responsive';
import NavBar from '../components/NavBar/NavBar';
import StateTree3D from '../components/StateTree3D/StateTree3D';
import AtomNetwork from '../components/AtomNetwork/AtomNetwork';
import ComponentTree from '../components/ComponentTree/ComponentTree';
import StateDiff from '../components/StateDiff/StateDiff';
import StateTree from '../components/StateTree/StateTree';
import ComponentTree from '../components/ComponentTree/ComponentTree';

interface navType {
  [tabName: string]: JSX.Element;
}

function VisualContainer(): JSX.Element {
  const [tab, setTab] = useState<string>('State Diff');

  const navLists: navType = {
    'State Diff': <StateDiff />,
    'Component Tree': <StateTree />,
    'State Tree 3D': <StateTree3D />,
    'Component Graph': (
      <ParentSize>
        {({ width, height }) => (
          <ComponentTree  width={width} height={height} />
        )}
      </ParentSize>
    ),
    'Atom Network': <AtomNetwork />,
  };

  const tabsList: string[] = Object.keys(navLists);

  return (
    <div className="visualContainer">
      <NavBar setTab={setTab} tabsList={tabsList} tab={tab} />
      {navLists[tab]}
    </div>
  );
}

export default VisualContainer;
