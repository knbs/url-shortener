import { shallowMount } from '@vue/test-utils'
import ListSection from '@/components/ListSection.vue'

describe('ListSection.vue', () => {
  it('Renders list when props.items passed', () => {
    const shortId = 'asd12asd'
    const fullUrl = 'https://example.com'
    const wrapper = shallowMount(ListSection, {
      propsData: { items: [{ shortId, fullUrl }] }
    })
    expect(wrapper.find('.url-item').exists()).toBeTruthy()
    expect(wrapper.find('.url-item').text()).toMatch(new RegExp(`${shortId}`))
    expect(wrapper.find('.url-item').text()).toMatch(new RegExp(`${fullUrl}`))
  })

  it('Empty list when no props items passed', () => {
    const wrapper = shallowMount(ListSection, {})
    expect(wrapper.find('.url-item').exists()).toBeFalsy()
  })
})
