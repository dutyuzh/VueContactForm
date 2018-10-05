import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import dasha from '@/components/dasha.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(dasha, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
