import { shallowMount } from '@vue/test-utils';
import Repos from './Repos';

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(Repos, {
        propsData: {},
        mocks: {},
        stubs: {},
        methods: {},
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe('Repos', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
    test('rendering', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});