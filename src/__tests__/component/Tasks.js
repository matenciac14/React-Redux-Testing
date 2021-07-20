import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import Tasks from '../../component/Tasks'
import 'jsdom-global/register';

describe('<Tasks />', ()=>{
  test('Render Tasks', ()=>{
    const tasks = shallow(
      <ProviderMock>
        <Tasks />
      </ProviderMock>
    )
    expect(tasks.length).toEqual(1)
  })
})