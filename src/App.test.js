import { shallowMount } from '@vue/test-utils';
import App from './App';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Repos from './components/Repos';

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(App, {
        data: () => ({
            api: {
                q: 'epeetz'
            }
        }),
        propsData: {},
        mocks: {},
        stubs: {},
        methods: {},
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe('App', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
    test('rendering', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    test('renders main child components', () => {
        const appHeader = wrapper.find(Header);
        const appSearchForm = wrapper.find(SearchForm);
        expect(appHeader.exists()).toBe(true);
        expect(appSearchForm.exists()).toBe(true);
    });
});