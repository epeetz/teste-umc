import { shallowMount } from '@vue/test-utils';
import SearchForm from '../components/SearchForm';

let wrapper;

beforeEach(() => {
	wrapper = shallowMount(SearchForm, {
		propsData: {},
		mocks: {},
		stubs: {},
		methods: {},
	});
});

afterEach(() => {
	wrapper.destroy();
});

describe('SearchForm', () => {
	test('is a Vue instance', () => {
		expect(wrapper.isVueInstance).toBeTruthy();
	});
	test('rendering', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
	test('renders input', () => {
		const input = wrapper.find('input');
		const button = wrapper.find('button');

		expect(input.exists()).toBe(true);
		expect(button.exists()).toBe(true);
	});
	test('calls "submitted" event when submitting form', () => {
		const searchString = 'epeetz';
		const input = wrapper.find('input');
		const button = wrapper.find('button');
		wrapper.vm.$emit('search', searchString);

		input.element.value = searchString;
		input.trigger('input');
		button.trigger('click');
		button.trigger('submit');

		expect(wrapper.emitted().search[0]).toEqual([searchString]);
	});

});