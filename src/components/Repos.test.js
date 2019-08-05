import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
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
    test('contain titles', () => {
        expect(wrapper.findAll('th').at(1).text()).toEqual('Full Name');
        expect(wrapper.findAll('th').at(2).text()).toEqual('URL');
        expect(wrapper.findAll('th').at(3).text()).toEqual('Created at');
    });
    test('axios test', () => {
        const mock = jest.fn();
        let result = mock("https://api.github.com/users/epeetz/repos");

        expect(result).toBeUndefined();
        expect(mock).toHaveBeenCalledWith("https://api.github.com/users/epeetz/repos");
    });
});