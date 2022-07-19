/** @format */

import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Phone' },
      { id: 2, name: 'Headphone' },
      { id: 3, name: 'Microphone' },
      { id: 4, name: 'Watch' },
    ]
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' },
    ]
    this._devices = [
      {
        id: 1,
        name: 'Phone',
        price: 25,
        rating: 5,
        img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_color-blue_10132020_big_carousel.jpg.large.jpg',
      },
      {
        id: 2,
        name: 'Headphone',
        price: 24,
        rating: 5,
        img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_color-blue_10132020_big_carousel.jpg.large.jpg',
      },
      {
        id: 3,
        name: 'Headphone',
        price: 24,
        rating: 5,
        img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_color-blue_10132020_big_carousel.jpg.large.jpg',
      },
      {
        id: 4,
        name: 'Headphone',
        price: 24,
        rating: 5,
        img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_color-blue_10132020_big_carousel.jpg.large.jpg',
      },
      {
        id: 5,
        name: 'Headphone',
        price: 24,
        rating: 5,
        img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_color-blue_10132020_big_carousel.jpg.large.jpg',
      },
      {
        id: 6,
        name: 'Headphone',
        price: 24,
        rating: 5,
        img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_color-blue_10132020_big_carousel.jpg.large.jpg',
      },
      {
        id: 7,
        name: 'Headphone',
        price: 24,
        rating: 5,
        img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_color-blue_10132020_big_carousel.jpg.large.jpg',
      },
    ]
    this._selectedType = {}
    this._selectedBrand = {}

    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}
