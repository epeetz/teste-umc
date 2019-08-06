import { shallowMount } from '@vue/test-utils';
import Header from './Header';

let wrapper;

beforeEach(() => {
	wrapper = shallowMount(Header, {
		propsData: {},
		mocks: {},
		stubs: {},
		methods: {},
	});
});

afterEach(() => {
	wrapper.destroy();
});

describe('Header', () => {
	test('is a Vue instance', () => {
		expect(wrapper.isVueInstance).toBeTruthy();
	});
	test('has elements and title', () => {
		const nav = wrapper.find("nav");
		expect(nav.findAll("span").length).toBe(1);
		expect(nav.find("span").text()).toContain('GitHub repositories Search');
	});
});