import { geoLocationInitialValues, useSetupLocationContextValues } from './GeoLocationContext'
import { renderHook, act } from '@testing-library/react-hooks'
import { GeoLocationStatusEnum } from '../enums/GeoLocationStatusEnum';

test("useSetupLocationContextValues binds corectly status and setStatus", async () => {
    const { result } = renderHook(() => useSetupLocationContextValues())

    const newStatus = GeoLocationStatusEnum.Success
    act(() => {
      result.current.setStatus(newStatus)
    })
  
    expect(result.current.isLoading).toBe(geoLocationInitialValues.isLoading)
    expect(result.current.alreadyRequested).toBe(geoLocationInitialValues.alreadyRequested)
    expect(result.current.status).toBe(newStatus)
    expect(result.current.location.latitude).toBe(geoLocationInitialValues.location.latitude)
    expect(result.current.location.longitude).toBe(geoLocationInitialValues.location.longitude)
});

test("useSetupLocationContextValues binds corectly location and setLocation", async () => {
    const { result } = renderHook(() => useSetupLocationContextValues())

    const newLocation ={
        latitude: Math.random(),
        longitude: Math.random()
    }

    act(() => {
      result.current.setLocation(newLocation)
    })
  
    expect(result.current.isLoading).toBe(geoLocationInitialValues.isLoading)
    expect(result.current.alreadyRequested).toBe(geoLocationInitialValues.alreadyRequested)
    expect(result.current.status).toBe(geoLocationInitialValues.status)
    expect(result.current.location.latitude).toBe(newLocation.latitude)
    expect(result.current.location.longitude).toBe(newLocation.longitude)
});

test("useSetupLocationContextValues binds corectly alreadyRequested and setAlreadRequested", async () => {
    const { result } = renderHook(() => useSetupLocationContextValues())

    act(() => {
      result.current.setAlreadyRequested(!geoLocationInitialValues.alreadyRequested)
    })
  
    expect(result.current.isLoading).toBe(geoLocationInitialValues.isLoading)
    expect(result.current.alreadyRequested).toBe(!geoLocationInitialValues.alreadyRequested)
    expect(result.current.status).toBe(geoLocationInitialValues.status)
    expect(result.current.location.latitude).toBe(geoLocationInitialValues.location.latitude)
    expect(result.current.location.longitude).toBe(geoLocationInitialValues.location.longitude)
});

test("useSetupLocationContextValues binds corectly isLoading and setIsLoading", async () => {
    const { result } = renderHook(() => useSetupLocationContextValues())
    act(() => {
      result.current.setIsLoading(!geoLocationInitialValues.isLoading)
    })
  
    expect(result.current.isLoading).toBe(!geoLocationInitialValues.isLoading)
    expect(result.current.alreadyRequested).toBe(geoLocationInitialValues.alreadyRequested)
    expect(result.current.status).toBe(geoLocationInitialValues.status)
    expect(result.current.location.latitude).toBe(geoLocationInitialValues.location.latitude)
    expect(result.current.location.longitude).toBe(geoLocationInitialValues.location.longitude)
});