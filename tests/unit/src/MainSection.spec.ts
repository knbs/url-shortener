import { shallowMount } from '@vue/test-utils'
import MainSection from '@/components/MainSection.vue'

describe('MainSection.vue', () => {
  it('Exec callback when button clicked', () => {
    const div = document.createElement('div')
    div.id = 'root'
    document.body.appendChild(div)
    const wrapper = shallowMount(MainSection, {
      attachTo: '#root'
    })
    const urlValue = 'htttp://example.com'
    wrapper.setData({ urlValue })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('callBack')).toHaveLength(1)
    expect(wrapper.emitted('callBack')?.[0][0]).toBe(urlValue)
  })
})
